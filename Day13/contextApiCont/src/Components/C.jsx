import React from "react";
import { useContext } from "react";
import { CounterContext } from "../Utils/CounterContext";
const C = () => {
  const { count } = useContext(CounterContext);
  return (
    <div>
      <h1>{count}</h1>
    </div>
  );
};

export default C;
