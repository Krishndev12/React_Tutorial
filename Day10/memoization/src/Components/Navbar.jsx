// const Navbar = () => {
//   console.log("navbar mounted");
//   return <div>Navbar</div>;
// };

// export default Navbar;

// ⭐⭐⭐⭐
// how we memoised the component
// iss se pahle jab bhi App.jsx ki state or props change hoti hai to Navbar.jsx bhi render hoti hai baar baar, kyunki Navbar.jsx , App,jsx me called hai.

// isko bacha sakte hai memoised kar ke
import React from "react";
import { memo } from "react";
const Navbar = () => {
  console.log("navbar rendered");
  return <div></div>;
};

// export default Navbar;

// aise bhi likh sakte hai.
// const memoisedNavbar = memo(Navbar);
// export default memoisedNavbar;

//ekk line me iss tarah likh sakte hai.

// abb jab App.jsx re-render hoga to Navbar.jsx nahi hoga uske wajah se kyuki Navbar.jsx memoised hai abb.
export default memo(Navbar);
