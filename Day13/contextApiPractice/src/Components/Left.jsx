// import { TextContext, useContext } from "../Utils/TextContext";

import { useRef } from "react";
import { useTextContext } from "../Utils/TextContext";

const Left = () => {
  //   const { setText } = useContext(TextContext);
  const { setText, text } = useTextContext();
  const inputRef = useRef(null);
  return (
    <div className="border border-green-400 h-[100vh] w-[50vh] ">
      <input
        ref={inputRef}
        className="border"
        type="text"
        placeholder="type here"
      />
      <button
        className="border ml-2"
        onClick={() => {
          setText([...text, inputRef.current.value]);
          inputRef.current.value = "";
        }}
      >
        Add
      </button>
    </div>
  );
};

export default Left;
