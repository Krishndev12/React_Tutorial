import React from "react";
// import "./Utils/CounterSlice"
import { useSelector, useDispatch } from "react-redux";
import { increament, decreament, reset } from "./Utils/CounterSlice";

const App = () => {
  // console.log(CounterSlice);
  const data = useSelector((store) => {
    return store.Counter; // ye jo Counter likhe hai wo hai Store.js ke reducer me key Counter.
  });

  const dispatch = useDispatch();
  // console.log(data);
  return (
    <div>
      <h1>{data}</h1>
      <button
        onClick={() => {
          // dispatch ke andar action creater aata tha jo action object banate hai(action creater to action abject hi  banate hai). wo action object ham dispatch me yaha khud se likhte the.
          // yaha khud se action creator ban jata hai.
          dispatch(increament()); // simply dispatch ke andar action creator ko call kara diya.
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

export default App;
