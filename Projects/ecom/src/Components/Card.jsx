import React from "react";
const Card = ({ info }) => {
  const { description, title, price, rating, images } = info;
  return (
    <div
      key={info.id}
      className="group w-full max-w-sm overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
    >
      {" "}
      {/* Product Image */}{" "}
      <div className="relative overflow-hidden bg-gray-100">
        {" "}
        <img
          src={images[0]}
          alt="image not found"
          className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
        />{" "}
        {/* Rating */}{" "}
        <span className="absolute right-3 top-3 rounded-full bg-white px-3 py-1 text-sm font-semibold text-gray-800 shadow">
          {" "}
          ⭐ {rating}{" "}
        </span>{" "}
      </div>{" "}
      {/* Product Details */}{" "}
      <div className="p-5">
        {" "}
        <h2 className="mb-2 truncate text-xl font-bold text-gray-800">
          {" "}
          {title}{" "}
        </h2>{" "}
        <p className="mb-4 line-clamp-2 text-sm leading-6 text-gray-500">
          {" "}
          {description}{" "}
        </p>{" "}
        <div className="mb-5 flex items-center justify-between">
          {" "}
          <span className="text-2xl font-bold text-gray-900">
            {" "}
            ${price}{" "}
          </span>{" "}
          <span className="rounded-lg bg-green-100 px-3 py-1 text-sm font-medium text-green-700">
            {" "}
            In Stock{" "}
          </span>{" "}
        </div>{" "}
        {/* View Product Button */}{" "}
        <button className="w-full rounded-xl bg-black px-5 py-3 font-semibold text-white transition duration-300 hover:bg-gray-800 active:scale-95">
          {" "}
          Add To Cart{" "}
        </button>{" "}
      </div>{" "}
    </div>
  );
};
export default Card;
