import React, { useState, useEffect } from "react";
import Loader from "../Components/Loader";
import { useSelector, useDispatch } from "react-redux";
import { addProduct } from "../Utils/ProductSlice";

const api = "https://dummyjson.com/products";

const Home = () => {
  const [prod, setProd] = useState([]);
  const data = useSelector((store) => {
    // console.log(store);
    return store.Products;
  });
  const dispatch = useDispatch();
  useEffect(() => {
    fetch(api)
      .then((res) => {
        return res.json();
      })
      .then((d) => {
        setProd(d.products);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 px-6 py-8">
      {prod.length > 0 ? (
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {prod.map((item, index) => {
            return (
              <div
                key={item.id}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src={item.images[0]}
                  alt={item.title}
                  className="w-full h-52 object-cover"
                />

                <div className="p-5">
                  <h2 className="text-lg font-semibold text-gray-800 mb-2">
                    {item.title}
                  </h2>

                  <p className="text-sm text-gray-500 capitalize mb-3">
                    {item.category}
                  </p>

                  <p className="text-xl font-bold text-green-600">
                    ${item.price}
                  </p>

                  <button
                    onClick={() => {
                      dispatch(addProduct(item));
                    }}
                    className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default Home;
