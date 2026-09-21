import { useState } from "react";
const App = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>{count}</h1>
      <button
        onClick={() => {
          // setCount(count + 1);
          // setCount(count + 1);
          // setCount(count + 1);

          setCount((prev) => prev + 1);
          setCount((prev) => prev + 1);
          setCount((prev) => prev + 1);
        }}
      >
        Click me
      </button>
    </div>
  );
};

export default App;
