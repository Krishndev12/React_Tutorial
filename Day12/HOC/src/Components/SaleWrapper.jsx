import React from "react";

const SaleWrapper = ({ children }) => {
  //   console.log(children);
  return (
    <div className="relative">
      <div className="absolute bg-red-300 right-0">sale</div>
      {children}
    </div>
  );
};

export default SaleWrapper;
