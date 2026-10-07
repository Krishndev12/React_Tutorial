import React from "react";
import Navbar from "../Components/Navbar";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const Cart = () => {
  const data = useSelector((store) => {
    return store.Products;
  });

  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 px-6 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Your Cart</h1>

        {data.length === 0 ? (
          <div className="bg-white rounded-xl shadow-md p-10 text-center">
            <h2 className="text-xl font-semibold text-gray-700">
              Your cart is empty
            </h2>
            <p className="text-gray-500 mt-2">
              Add some products to your cart.
            </p>

            <button
              onClick={() => {
                navigate("/home");
              }}
              className="mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg
             hover:bg-blue-700 active:scale-95 transition-all duration-200
             shadow-md hover:shadow-lg"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            {data.map((item) => {
              return (
                <div
                  key={item.id}
                  className="bg-white rounded-xl shadow-md p-5 flex items-center justify-between hover:shadow-lg transition-shadow duration-300"
                >
                  <div>
                    <h2 className="text-xl font-semibold text-gray-800">
                      {item.title}
                    </h2>

                    <p className="text-sm text-gray-500 mt-1 capitalize">
                      {item.category}
                    </p>

                    <p className="text-lg font-bold text-green-600 mt-3">
                      ${item.price}
                    </p>
                  </div>

                  <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition">
                    Remove
                  </button>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
