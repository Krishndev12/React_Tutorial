// import { useState } from "react";

// const ChildA = () => {
//   const [count, setCount] = useState(0);
//   const increament = () => {
//     setCount(count + 1);
//   };
//   const decreament = () => {
//     setCount(count + 1);
//   };
//   return (
//     <div>
//       <p>ChildA</p>
//       <h1>{count}</h1>
//       <button onClick={increament}>increament</button>
//       <button onClick={decreament}>decreament</button>
//     </div>
//   );
// };

// export default ChildA;

// –––––––––––––––-----------------

import React, { useState } from "react";
import useCounnter from "./useCounnter";

const ChildA = () => {
  const { count, increament, decreament } = useCounnter();
  return (
    <div>
      <div>
        <p>ChildA</p>
        <h1>{count}</h1>
        <button onClick={increament}>increament</button>
        <button onClick={decreament}>decreament</button>{" "}
      </div>
    </div>
  );
};

export default ChildA;
