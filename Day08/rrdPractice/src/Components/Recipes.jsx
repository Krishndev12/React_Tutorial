import { useState, useEffect } from "react";

const api = "https://dummyjson.com/recipes";
const Recipes = ({recipe,setRecipe}) => {


  useEffect(() => {
    fetch(api)
      .then((res) => {
        return res.json();
      })
      .then((d) => {
        // console.log(d.recipes);
        setRecipe(d.recipes);
      });
  }, []);
  return (
    <>
      <div className="grid grid-cols-3 gap-3">
        {recipe.length > 0 ? (
          recipe.map((item) => {
            return (
              <div className="border">
                <div className="h-[40%]">
                  <h2>{item.id}</h2>
                  <p>{item.name}</p>
                  <p>{item.cuisine}</p>
                  <p>{item.difficulty}</p>
                </div>
                <img
                  className="h-[60%] w-full object-cover"
                  src={item.image}
                  alt="image not found"
                />
              </div>
            );
          })
        ) : (
          <h1>Loading...</h1>
        )}
      </div>
    </>
  );
};

export default Recipes;
