import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const Counter = () => {
  const counter = useSelector((store) => {
    return store.initialCount;
  });
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => {}}>+</button>
      <button onClick={() => {}}>-</button>
      <button onClick={() => {}}>R</button>
    </div>
  );
};

export default Counter;
