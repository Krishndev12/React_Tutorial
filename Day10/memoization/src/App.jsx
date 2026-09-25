// import { useState } from "react";
// import Navbar from "./Components/Navbar";

// const App = () => {
//   const [count, setCount] = useState(0);
//   console.log("App mounted");
//   return (
//     <div>
//       <Navbar />

//       <div>
//         <h1>{count}</h1>
//         <button
//           onClick={() => {
//             setCount(count + 1);
//           }}
//         >
//           increament
//         </button>
//       </div>
//     </div>
//   );
// };

// export default App;

// ⭐⭐⭐⭐⭐⭐⭐

import { useState } from "react";
import Navbar from "./Components/Navbar";

const App = () => {
  const [count, setCount] = useState(0);
  console.log("App mounted");
  return (
    <div>
      <Navbar />

      <div>
        <h1>{count}</h1>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          increament
        </button>
      </div>
    </div>
  );
};

export default App;
