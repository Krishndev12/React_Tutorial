import React, { useState } from "react";

const Calculator = () => {
  const [val, setVal] = useState("0");

  function btnClickHandler(e) {
    let value = e.target.innerText;
    let symbols = ["+", "-", "*", "/"];

    if (symbols.includes(value) && symbols.includes(val.slice(-1))) {
      return;
    }

    if (
      symbols.includes(value) &&
      (val === "0" || symbols.includes(val.slice(-1)))
    ) {
      return;
    }

    if (val == 0) {
      setVal(value);
    } else {
      setVal(val + value);
    }
  }

  return (
    <div className=" h-[100vh] w-[100vw] flex justify-center items-center">
      <div className="w-[50vh] h-[50vh] bg-amber-200">
        <div className="h-[15%]">
          <div className="h-full w-full text-3xl text-right py-2.5 px-2">
            {val}
          </div>
        </div>
        <div className="bg-red-300 grid grid-cols-4 h-[85%] gap-3 ">
          <button
            onClick={btnClickHandler}
            className="border-1 rounded-full cursor-pointer hover:bg-red-400 "
          >
            7
          </button>
          <button
            onClick={btnClickHandler}
            className="border-1 rounded-full cursor-pointer hover:bg-red-400"
          >
            8
          </button>
          <button
            onClick={btnClickHandler}
            className="border-1 rounded-full cursor-pointer hover:bg-red-400"
          >
            9
          </button>
          <button
            onClick={btnClickHandler}
            className="border-1 rounded-full cursor-pointer hover:bg-red-400"
          >
            *
          </button>
          <button
            onClick={btnClickHandler}
            className="border-1 rounded-full cursor-pointer hover:bg-red-400"
          >
            4
          </button>
          <button
            onClick={btnClickHandler}
            className="border-1 rounded-full cursor-pointer hover:bg-red-400"
          >
            5
          </button>
          <button
            onClick={btnClickHandler}
            className="border-1 rounded-full cursor-pointer hover:bg-red-400"
          >
            6
          </button>
          <button
            onClick={btnClickHandler}
            className="border-1 rounded-full cursor-pointer hover:bg-red-400"
          >
            /
          </button>
          <button
            onClick={btnClickHandler}
            className="border-1 rounded-full cursor-pointer hover:bg-red-400"
          >
            1
          </button>
          <button
            onClick={btnClickHandler}
            className="border-1 rounded-full cursor-pointer hover:bg-red-400"
          >
            2
          </button>
          <button
            onClick={btnClickHandler}
            className="border-1 rounded-full cursor-pointer hover:bg-red-400"
          >
            3
          </button>
          <button
            onClick={btnClickHandler}
            className="border-1 rounded-full cursor-pointer hover:bg-red-400"
          >
            -
          </button>
          <button
            onClick={btnClickHandler}
            className="border-1 rounded-full cursor-pointer hover:bg-red-400"
          >
            0
          </button>
          <button
            onClick={btnClickHandler}
            className="border-1 rounded-full cursor-pointer hover:bg-red-400"
          >
            .
          </button>
          <button
            onClick={() => {
              setVal(eval(val));
            }}
            className="border-1 rounded-full cursor-pointer hover:bg-red-400"
          >
            =
          </button>
          <button
            onClick={btnClickHandler}
            className="border-1 rounded-full cursor-pointer hover:bg-red-400"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
