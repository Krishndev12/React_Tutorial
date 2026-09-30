import React from "react";
import Two from "./Two";

const One = ({name}) => {
  
  return (
    <div>
      <h1>One</h1>
      <Two name={name} />
    </div>
  );
};

export default One;
