// import { useState } from "react";

// const withCounter = (WrappedComponent) => {
//   return function EnhancedComponent() {
//     const [count, setCount] = useState(0);

//     const increament = () => {
//       setCount(count + 1);
//     };
//     return <WrappedComponent count={count} increament={increament} />;
//   };
// };

// export default withCounter;

import { useState } from "react";

const withCounter = (WrappedComponent) => {
  return function EnhancedComponent() {
    const [count, setCount] = useState(0);

    const increament = () => {
      setCount(count + 1);
    };
    return <WrappedComponent count={count} increament={increament} />;
  };
};

export default withCounter;
