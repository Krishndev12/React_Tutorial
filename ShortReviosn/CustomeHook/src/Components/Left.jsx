import React from "react";
import useCounter from "./useCounter";

const Left = () => {
  const { count, increament, decreament } = useCounter();
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increament}>+</button>
      <button onClick={decreament}>-</button>
    </div>
  );
};

export default Left;
