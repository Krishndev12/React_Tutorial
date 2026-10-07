import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increament, decreament, reset } from "../Utils/CounterSlice";

const Counter = () => {
  const count = useSelector((store) => {
    // return store.Counter;
    // console.log(store);
    return store.Counter;
  });
  const dispatch = useDispatch();
  return (
    <div>
      <h1>{count}</h1>
      <button
        onClick={() => {
          dispatch(increament());
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          dispatch(reset());
        }}
      >
        R
      </button>
      <button
        onClick={() => {
          dispatch(decreament());
        }}
      >
        -
      </button>
    </div>
  );
};

export default Counter;
