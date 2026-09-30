import React from "react";
import Four from "./Four";

const Three = ({ name }) => {
  return (
    <div>
      <h1>Three</h1>
      <Four name={name} />
    </div>
  );
};

export default Three;
