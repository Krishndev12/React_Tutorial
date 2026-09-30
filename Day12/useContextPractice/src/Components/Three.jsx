import React from "react";
import Four from "./Four";
import { useState } from "react";
import { createContext } from "react";

export const counterContext = createContext();
const Three = () => {
  const [count, setCount] = useState(0);
  //   console.log(count);
  return (
    <counterContext.Provider value={{ count }}>
      <div>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          increaemnt
        </button>
        <Four />
      </div>
    </counterContext.Provider>
  );
};

export default Three;
