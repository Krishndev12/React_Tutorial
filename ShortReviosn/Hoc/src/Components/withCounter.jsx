import React from "react";
import { useState } from "react";

const withCounter = (WrappedComponent) => {
  return function CounterHoc() {
    const [count, setCount] = useState(0);

    const increament = () => {
      setCount(count + 1);
    };

    return (
      <WrappedComponent
        count={count}
        increament={increament}
      ></WrappedComponent>
    );
  };
};

export default withCounter;
