import { Route, Routes, Link } from "react-router-dom";
import Products from "./Products";
import Recipes from "./Recipes";
import Harryp from "./Harryp";
import { useState } from "react";

const Navbar = () => {
  const [prod, setProd] = useState([]);
  const [recipe, setRecipe] = useState([]);
  const [harry, setHarry] = useState([]);
  return (
    <div className="bg-pink-400 w-full min-h-screen">
      <nav className="flex items-center justify-center gap-10 bg-pink-600 px-6 py-5 shadow-lg">
        <Link
          className="rounded-lg px-5 py-2 font-semibold text-white transition duration-300 hover:bg-white hover:text-pink-600"
          to="/products"
        >
          Products
        </Link>

        <Link
          className="rounded-lg px-5 py-2 font-semibold text-white transition duration-300 hover:bg-white hover:text-pink-600"
          to="/recipes"
        >
          Recipes
        </Link>

        <Link
          className="rounded-lg px-5 py-2 font-semibold text-white transition duration-300 hover:bg-white hover:text-pink-600"
          to="/harryp"
        >
          Harry
        </Link>
      </nav>

      <div className="mx-auto max-w-7xl px-6 py-8">
        <Routes>
          <Route path="*" element={<h1>Error</h1>} />
          <Route
            path="/products"
            element={<Products prod={prod} setProd={setProd} />}
          />
          <Route
            path="/recipes"
            element={<Recipes recipe={recipe} setRecipe={setRecipe} />}
          />
          <Route
            path="/harryp"
            element={<Harryp harry={harry} setHarry={setHarry} />}
          />
        </Routes>
      </div>
    </div>
  );
};

export default Navbar;
