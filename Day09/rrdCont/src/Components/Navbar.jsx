// import { Link } from "react-router-dom"

// const Navbar = () => {

//   console.log(window.location.pathname)

//   return (
//     <nav className="bg-blue-400 flex justify-between p-4">
//         <h3>LOGO</h3>

//         <div className="flex gap-3">
//             <Link className={
//               window.location.pathname == "/a" ? "bg-red-700" : undefined
//             } to="/a">A</Link>
//             <Link className={
//               window.location.pathname == "/b" ? "bg-red-700" : undefined
//             } to="/b">B</Link>
//             <Link className={
//               window.location.pathname == "/c" ? "bg-red-700" : undefined
//             } to="/c">C</Link>
//         </div>
//     </nav>
//   )
// }

// export default Navbar

// NavLink ka use .

import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  let isLogin = true;

  function handleLogin() {
    if (isLogin) {
      navigate("/a");
    } else {
      navigate("/login");
    }
  }
  return (
    <div>
      <nav>
        <NavLink
          className={({ isActive }) => {
            if (isActive) {
              return "bg-red-600";
            }
          }}
          to="/a"
        >
          A
        </NavLink>
        <NavLink
          className={({ isActive }) => {
            if (isActive) {
              return "bg-red-600";
            }
          }}
          to="/b"
        >
          B
        </NavLink>
        <NavLink
          className={({ isActive }) => {
            if (isActive) {
              return "bg-red-500";
            }
          }}
          to="/c"
        >
          C
        </NavLink>

        <button
          onClick={() => {
            navigate("/a");
          }}
          className="bg-yellow-500 border"
        >
          Home
        </button>
        <button onClick={handleLogin} className="bg-yellow-500 border">
          {" "}
          Login{" "}
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
