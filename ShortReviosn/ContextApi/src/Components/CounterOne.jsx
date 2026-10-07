import React from "react";
import { useCounter } from "../Utils/CounterContext";

const CounterOne = () => {
  const { count, setCount } = useCounter();
  return (
    <div>
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +
      </button>
    </div>
  );
};

export default CounterOne;
