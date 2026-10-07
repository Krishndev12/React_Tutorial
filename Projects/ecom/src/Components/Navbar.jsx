import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const logoNavigate = useNavigate();
  return (
    <div className="w-full bg-gray-600 text-white shadow-lg">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <h1
          onClick={() => {
            logoNavigate("/");
          }}
          className="text-2xl font-bold text-yellow-400 cursor-pointer"
        >
          LOGO
        </h1>

        {/* Navigation */}
        <div className="flex items-center gap-3">
          <NavLink
            to="/products"
            className={({ isActive }) =>
              `px-4 py-2 rounded-lg transition duration-200 ${
                isActive
                  ? "bg-yellow-400 text-black font-semibold"
                  : "hover:bg-gray-700"
              }`
            }
          >
            Products
          </NavLink>

          <NavLink
            to="/cart"
            className={({ isActive }) =>
              `px-4 py-2 rounded-lg transition duration-200 ${
                isActive
                  ? "bg-yellow-400 text-black font-semibold"
                  : "hover:bg-gray-700"
              }`
            }
          >
            Cart
          </NavLink>

          <NavLink
            to="/profile"
            className={({ isActive }) =>
              `px-4 py-2 rounded-lg transition duration-200 ${
                isActive
                  ? "bg-yellow-400 text-black font-semibold"
                  : "hover:bg-gray-700"
              }`
            }
          >
            Profile
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
