import React from "react";
import { TextContext, useTextContext } from "../Utils/TextContext";
const Right = () => {
  //   const { text } = useContext(TextContext);
  const { text } = useTextContext();
  return (
    <div>
      <ul>
        {text.map((item) => {
          return <li>{item}</li>;
        })}
      </ul>
    </div>
  );
};

export default Right;
