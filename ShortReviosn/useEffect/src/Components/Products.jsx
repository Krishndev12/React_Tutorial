// import React, { useEffect, useState } from "react";
// const api = "https://dummyjson.com/products";
// const Products = () => {
//   const [prod, setProd] = useState([]);
//   console.log(prod);

//   useEffect(() => {
//     fetch(api)
//       .then((res) => {
//         return res.json();
//       })
//       .then((d) => {
//         // console.log(d);
//         setProd(d.products);
//       });
//   },[]);

//   return (
//     <div>
//       {prod.length > 0 ? (
//         prod.map((item) => {
//           return (
//             <div key={item.id}>
//               <h2>{item.title}</h2>
//               <p>{item.category}</p>
//               <p>{item.price}</p>
//               <img src={item.images[0]} alt="img not found" />
//             </div>
//           );
//         })
//       ) : (
//         <h1>Loading...</h1>
//       )}
//     </div>
//   );
// };

// export default Products;

// ⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐
// 3 cases of useEffect

import React, { useEffect } from "react";

const Products = () => {
  useEffect(() => {
    let id = setInterval(() => {
      console.log("hello");
    }, 20000);

    return () => {
      clearInterval(id);
    };
  },[]);
  return <div>Products</div>;
};

export default Products;
