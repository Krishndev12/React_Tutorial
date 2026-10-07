// import { useSelector } from "react-redux";

// const Display = () => {
//   const data = useSelector((store) => {
//     return store.data;
//     // console.log(store);
//   });
//   return (
//     <div>
//       <ul>
//         {data.map((item) => {
//           return <li>{item}</li>;
//         })}
//       </ul>
//     </div>
//   );
// };

// export default Display;

import React from "react";
import { useSelector } from "react-redux";
const Display = () => {
  const data = useSelector((store) => {
    return store.data;
  });
  return (
    <div>
      {data.map((item) => {
        return (
          <article>
            <h1>{item.title}</h1>
            <p>{item.desc}</p>
          </article>
        );
      })}
    </div>
  );
};

export default Display;
