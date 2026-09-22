import { useState, useEffect } from "react";
const api = "https://dummyjson.com/products";
const Products2 = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(api)
      .then((res) => {
        return res.json();
      })
      .then((d) => {
        // console.log(d.products);
        setData(d.products);
      });
  });
  return (
    <div className="grid grid-cols-3 gap-2">
      {data.length > 0 ? (
        data.map((item) => {
          return (
            <div className="border">
              <p>{item.id}</p>
              <h2>{item.title}</h2>
              <h3>{item.category}</h3>
              <h4>{item.price}</h4>
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

export default Products2;
