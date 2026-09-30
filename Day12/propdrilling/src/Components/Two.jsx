import React from "react";
import Three from "./Three";

const Two = ({name}) => {
    
  return (
    <div>
        <h1>Two</h1>
      <Three name={name} />
    </div>
  );
};

export default Two;
