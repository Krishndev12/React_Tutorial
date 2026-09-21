// const Counter = () => {
//   let count = 0;
//   return (
//     <>
//       <div>{count}</div>
//       <button
//         onClick={() => {
//           count++;
//           console.log(count);
//         }}
//       >
//         Increament
//       </button>
//       <button
//         onClick={() => {
//           count = 0;

import { useState } from "react";

//           console.log(count);
//         }}
//       >
//         Reset
//       </button>
//       <button
//         onClick={() => {
//           count--;
//           console.log(count);
//         }}
//       >
//         Decreament
//       </button>
//     </>
//   );
// };

// export default Counter;

const Counter = () => {
  const [count, setCount] = useState(0); 
  return (
    <>
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increament
      </button>
      <button
        onClick={() => {
          setCount(0);
        }}
      >
        Reset
      </button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Decreament
      </button>
    </>
  );
};

export default Counter;
