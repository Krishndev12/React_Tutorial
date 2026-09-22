import { useState, useEffect } from "react";

const api = "https://dummyjson.com/recipes";
const Recipes = () => {
  const [recipe, setRecipe] = useState([]);

  useEffect(() => {
    fetch(api)
      .then((res) => {
        return res.json();
      })
      .then((d) => {
        // console.log(d.recipes);
        setRecipe(d.recipes);
      });
  });
  return (
    <div className="grid grid-cols-3 gap-3 p-4">
      {recipe.length > 0 ? (
        recipe.map((item) => {
          return (
            <div className="border">
              <p>{item.id}</p>
              <h2>{item.cuisine}</h2>
              <h3>{item.difficulty}</h3>
              <p>{item.name}</p>
              <img src={item.image} alt="image not found" />
            </div>
          );
        })
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
};

export default Recipes;
