// import React, { useState } from "react";

// const CounterOne = () => {
//   const [count, setCount] = useState(0);
//   return (
//     <div>
//       <div>
//         <h2>counter one</h2>
//         <h3>{count}</h3>
//         <button
//           onClick={() => {
//             setCount(count + 1);
//           }}
//         >
//           click
//         </button>
//       </div>
//     </div>
//   );
// };

// export default CounterOne;

import React from "react";

const CounterOne = ({ count, increament }) => {
  return (
    <>
      <p>counter1</p>
      <h1>{count}</h1>
      <button onClick={increament}>+</button>
    </>
  );
};

export default CounterOne;
