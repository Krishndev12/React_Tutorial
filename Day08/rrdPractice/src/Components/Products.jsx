import { useState, useEffect } from "react";
import { data } from "react-router-dom";
const api = "https://dummyjson.com/products";

const Products = ({ prod, setProd }) => {
  useEffect(() => {
    fetch(api)
      .then((res) => {
        return res.json();
      })
      .then((d) => {
        // console.log(d);
        setProd(d.products);
      });
  }, []);
  return (
    <div>
      <div className="grid grid-cols-3 gap-3">
        {prod.length > 0 ? (
          prod.map((item) => {
            return (
              <div key={item.id} className="border">
                <h2>{item.id}</h2>
                <p>{item.title}</p>
                <p>{item.category}</p>
                <p>${item.price}</p>
                <img src={item.images[0]} alt="image not found" />
              </div>
            );
          })
        ) : (
          <h1>Loading...</h1>
        )}
      </div>
    </div>
  );
};

export default Products;
