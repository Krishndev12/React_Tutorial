import React from "react";
import { MyContext } from "../App";
import { useContext } from "react";
import { counterContext } from "./Three";
const Four = () => {
  // yaha destructure kiye hai wo values jo pass kiye hai waha. useContext me MyContext pass kiye jo App.jsx se export kiye hai.
  const { name, lastName } = useContext(MyContext);
  const { count } = useContext(counterContext);
  return (
    <div>
      <h3>{count}</h3>
      <h1>firstName:{name}</h1>
      <h1>lastName:{lastName}</h1>
    </div>
  );
};

export default Four;
