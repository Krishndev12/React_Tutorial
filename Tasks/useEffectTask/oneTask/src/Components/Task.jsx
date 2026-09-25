// Create a counter that generates numbers from 0 to 100 and refreshes automatically at a fixed interval.

import { useState, useEffect } from "react";
const Task = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let id = setInterval(() => {
      setCount(count > 10 ? 0 : count + 1);
    }, 1000);

    return () => {
      clearInterval(id);
    };
  });
  return (
    <div>
      <h1>{count}</h1>
    </div>
  );
};

export default Task;
