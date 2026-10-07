import { useRef } from "react";
import { useState } from "react";

const First = () => {
  const [count, setCount] = useState(0);
  //   const [text, setText] = useState("");

  const inpRef = useRef(null);
  console.log("render");
  return (
    <div>
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        increament
      </button>
      <br />
      <input ref={inpRef} type="text" placeholder="for useRef" />
      <button
        onClick={() => {
          console.log(inpRef.current.value);
        }}
      >
        Click
      </button>
    </div>
  );
};

export default First;
