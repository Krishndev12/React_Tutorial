import React from "react";
import { useState } from "react";
import { createContext } from "react";
import One from "./Components/One";

export const myContext = createContext();

const App = () => {
  const [name, setName] = useState("");
  return (
    <myContext.Provider value={name}>
      <div>
        <input
          type="text"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <One />
      </div>
    </myContext.Provider>
  );
};

export default App;
