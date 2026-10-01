import React from "react";
import Gp from "./Components/Gp";
import { useContext } from "react";
import { CounterContext } from "./Utils/CounterContext";

const App = () => {
  // const { count, setCount } = useContext(CounterContext);

  
  return (
    <div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        increament
      </button>
      <Gp />
    </div>
  );
};

export default App;
