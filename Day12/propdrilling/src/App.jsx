import React from "react";
import One from "./Components/One";
import { useState } from "react";

const App = () => {
  const [name, setName] = useState("");
  return (
    <div>
      <h1>App</h1>
      <input
        type="text"
        onChange={(e) => {
          // console.log(e.target.value);
          setName(e.target.value);
        }}
      />
      <One name={name} />
    </div>
  );
};

export default App;
