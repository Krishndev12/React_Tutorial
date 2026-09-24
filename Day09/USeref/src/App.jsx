/*
// without useRef, yaha jab bhi input me type kar rahe hai state change ho rahi hai to app re-render ho rahi hai. ye sahi chiz nahi hai.

import { useState } from "react";
const App = () => {
  const [text, setText] = useState("");
  console.log("App mounted");
  return (
    <div>
      <input
        placeholder="type here"
        onInput={(e) => {
          setText(e.target.value);
        }}
        type="text"
      />
      <h1>{text}</h1>
    </div>
  );
};

export default App;

*/

import { useEffect, useRef } from "react";

// ⭐⭐⭐⭐⭐⭐

// import React from "react";
// import { useRef } from "react";
// const App = () => {
//   const obj = useRef();
//   console.log("App mounted");
//   return (
//     <div>
//       <input
//         placeholder="type here"
//         onInput={(e) => {
//           // setText(e.target.value);
//           obj.current = e.target.value;
//         }}
//         type="text"
//       />
//       <h1>{obj.current}</h1>

//       {/* // ye isiliye kar rahe hai ki dekh rahe hai changes track ho rahi hai ya nahi. */}
//       <button
//         onClick={() => {
//           console.log(obj.current);
//         }}
//       >
//         submit
//       </button>
//     </div>
//   );
// };

// export default App;

// yaha rathar tahn making a state we make a useRef which returns an object, in this object there is a key we set karte hai value.

// ye karne se naa hi h1 tag me dikha live text naa hi app re-render hua.

// track ho raha hai changes par re-render nahi.

// changes track ho raha hai aisa isiliye bol rahe hai kyuki input me kuchh likhne ke baad, submit button click karne se console me dikh raha hai.

// aisa jarurat hota hai jaise form hai to submit button click hone ke baad chahiye hame input ki values. mujhe live click me nahi chahiye.

// ⭐⭐⭐⭐⭐⭐
// abb ye kamm to ekk normal variable se bhi kar sakte the sirf, value hi save karna tha

// import React from "react";

// const App = () => {
//   let str = "";
//   console.log("App mounted");

//   return (
//     <div>
//       <input
//         placeholder="type here"
//         onInput={(e) => {
//           str = e.target.value;
//         }}
//         type="text"
//         name=""
//         id=""
//       />
//       <h1>{str}</h1>
//       <button
//         onClick={() => {
//           console.log(str);
//         }}
//       >
//         submit
//       </button>
//     </div>
//   );
// };

// export default App;

// ⭐⭐⭐⭐⭐⭐
// useRef ki jarurat isiliye padi normal valiable se kaam nahi ho paaya. kya nahi ho paya wo abhi aage dekhte hai.

// import React, { useState } from "react";

// const App = () => {
//   const [count, setCount] = useState(0);
//   let str = "";
//   console.log("App mounted");
//   return (
//     <div>
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
//       <input
//         placeholder="type here"
//         onInput={(e) => {
//           str = e.target.value;
//         }}
//         type="text"
//         name=""
//         id=""
//       />
//       <h1>{str}</h1>
//       <button
//         onClick={() => {
//           console.log(str);
//         }}
//       >
//         submit
//       </button>
//     </div>
//   );
// };

// export default App;

// dekho jab bhi increament button par click kiye to state change hua component re-render ho raha hai. abb ham input me kuchh liye submit par click kiye to wo console par dikh gaya.
// feer ham increament me click kiye count badha app re-render hua par wo str ki ki value empty ho gayi abb agar mai submit par click karta hu to emty string aati hai console me.
// wo str isiliye empty ho jata hai state change hone par kyuki , state change hone se app re-render hoti hai and code execution top to bottom hoti hai isiliye strempty ho jati hai.

// ⭐⭐⭐⭐⭐⭐
// isiliye useRef ka need hui, jab reconciliation nahi karwani hai par data persist karwani hai between re-render.

// /
// import React, { useRef, useState } from "react";

// const App = () => {
//   const [count, setCount] = useState(0);
//   // let str = "";
//   // isme bhi initial value dete hai.
//   const userNameRef = useRef("");
//   console.log("App mounted");
//   return (
//     <div>
//       {/* // increament par click karne ke baad UI me ye h1 dikh jata hai jo bhi input me rahta hai text. aisa kyu hota hai kyuki value to persist(saved) thi re-render nahi ho raha tha. par increament me click karne ke baad component re-render hui to ye h1 me dikh yaha saved value.  */}
//       <h1>{userNameRef.current}</h1>
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
//       <input
//         placeholder="type here"
//         onInput={(e) => {
//           // str = e.target.value;
//           userNameRef.current = e.target.value;
//         }}
//         type="text"
//         name=""
//         id=""
//       />
//       {/* <h1>{str}</h1> */}
//       <button
//         onClick={() => {
//           console.log(userNameRef.current);
//         }}
//       >
//         submit
//       </button>
//     </div>
//   );
// };

// export default App;

// ⭐⭐⭐⭐⭐⭐
// Accessing dom elements
const App = () => {
  const inpRef = useRef(null);

  // inpRef me pahle to null hai component first mount hua to isme wo input aaya . tab ham isme lagaye focus method.
  // kyuki useEffect component mount hone ke baad chalta hai naa. isiliye useEffect ka andar likhe hai ye chiz inpRef me input element aane ka wait kar rahe hai.
  useEffect(() => {
    // console.log(inpRef);
    inpRef.current.focus();
  }, []);
  return (
    <div>
      <input ref={inpRef} type="text" placeholder="type here" />
    </div>
  );
};

export default App;
