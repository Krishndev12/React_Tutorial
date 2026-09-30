// import React, { useState } from "react";

// const CounterTwo = () => {
//   const [count, setCount] = useState(0);
//   return (
//     <div>
//       <div className="p-10 border mt-10 w-[400px]">
//         <h1 className=" font-bold">{count}</h1>
//         <button
//           className="border p-1 font-bold"
//           onClick={() => {
//             setCount(count + 1);
//           }}
//         >
//           click me
//         </button>
//       </div>
//     </div>
//   );
// };

// export default CounterTwo;

// –––––––––––––––––––––––––––––––

import React from "react";

const CounterTwo = ({ count, increament }) => {
  return (
    <>
      <p>counter2</p>
      <h1>{count}</h1>
      <button onClick={increament}>+</button>
    </>
  );
};

export default CounterTwo;
