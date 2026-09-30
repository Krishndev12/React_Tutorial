import React from "react";
import { useContext } from "react";
import { myContext } from "../App";

const Four = () => {
  let val = useContext(myContext);
  console.log(val);
  return (
    <div>
      <h1>{val}</h1>
    </div>
  );
};

export default Four;
