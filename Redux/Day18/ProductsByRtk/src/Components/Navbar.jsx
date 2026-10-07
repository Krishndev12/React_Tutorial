import React from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="bg-gray-900 px-8 py-4 shadow-md">
      {" "}
      <div className="flex items-center justify-between max-w-6xl mx-auto">
        {" "}
        <h1 className="text-xl font-bold text-white">My App</h1>{" "}
        <div className="flex gap-8 items-center">
          {" "}
          <NavLink
            to="/home"
            className={({ isActive }) =>
              `text-lg font-medium transition-colors ${isActive ? "text-blue-400" : "text-gray-300 hover:text-white"}`
            }
          >
            {" "}
            Home{" "}
          </NavLink>{" "}
          <NavLink
            to="/cart"
            className={({ isActive }) =>
              `relative flex items-center gap-2 text-lg font-medium transition-colors ${isActive ? "text-blue-400" : "text-gray-300 hover:text-white"}`
            }
          >
            <span>🛒</span> <span>Cart</span> {/* Cart count */}
            <span className="absolute -top-3 -right-4 flex h-5 min-w-5 items-center justify-center rounded-full bg-red-500 px-1 text-xs font-bold text-white">
              3
            </span>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
