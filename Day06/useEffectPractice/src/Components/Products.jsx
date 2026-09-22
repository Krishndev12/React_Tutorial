import { useEffect } from "react";
import { useState } from "react";

let api = "https://dummyjson.com/products";
const Products = () => {
  const [prod, setProd] = useState([]);
  console.log(prod);
  useEffect(() => {
    fetch(api)
      .then((res) => {
        return res.json();
      })
      .then((d) => {
        setProd(d.products);
        // console.log(d);
      });
  }, []);
  return (
    <div>
      {prod.length > 0 ? (
        prod.map((item) => {
          return (
            <div>
              <p>{item.id}</p>
              <h2>{item.title}</h2>
              <p>{item.category}</p>
              <p>{item.price}</p>
              <img src={item.images[0]} alt="image not found" />
            </div>
          );
        })
      ) : (
        <h1>Loading....</h1>
      )}
    </div>
  );
};

export default Products;
