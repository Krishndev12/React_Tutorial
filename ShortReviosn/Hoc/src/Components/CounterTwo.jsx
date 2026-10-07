// import React from "react";
// import { useState } from "react";

// const CounterTwo = () => {
//   const [count, setCount] = useState(0);
//   return (
//     <div>
//       <h2>{count}</h2>
//       <p>Counter2</p>
//       <button
//         onClick={() => {
//           setCount(count + 1);
//         }}
//       >
//         Increament
//       </button>
//     </div>
//   );
// };

// export default CounterTwo;

import React from "react";

const CounterTwo = ({ count, increament }) => {
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increament}>+</button>
    </div>
  );
};

export default CounterTwo;
