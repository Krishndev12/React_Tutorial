// jab multiple inpute tags  hote hai to kitna hai kaise states banane hai

// import React from "react";

// const Demo = () => {
//   let value = "";
//   return (
//     <div>
//       {/* <input id="inp" type="text" placeholder="text here" />
//       <button
//         onClick={() => {
//           let val = document.getElementById("inp").value;
//           console.log(val);
//         }}
//       >
//         Click me{" "}
//       </button> */}

//       <input
//         onInput={(e) => {
//           value = e.target.value;
//         }}
//         placeholder="type here"
//         type="text"
//       />
//       <button
//         onClick={() => {
//           console.log(value);
//         }}
//       >
//         click me
//       </button>
//     </div>
//   );
// };

// export default Demo;

// ⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐

// import React from "react";

// import { useState } from "react";

// const Demo = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [pass, setPass] = useState("");

//   return (
//     <div>
//       <input
//         onInput={(e) => {
//           setName(e.target.value);
//         }}
//         placeholder="enter name"
//         type="text"
//       />
//       <br />
//       <input
//         onInput={(e) => {
//           setEmail(e.target.value);
//         }}
//         placeholder="enter email"
//         type="email"
//       />
//       <br />
//       <input
//         onInput={(e) => {
//           setPass(e.target.value);
//         }}
//         placeholder="enter password"
//         type="text"
//       />
//       <br />
//       <button
//         onClick={() => {
//           console.log(`username:${name}`);
//           console.log(`email:${email}`);
//           console.log(`password:${pass}`);
//         }}
//       >
//         click me{" "}
//       </button>
//     </div>
//   );
// };

// export default Demo;

// ⭐⭐⭐⭐⭐⭐⭐⭐⭐
// Rather than making multiple states for multiple input tag, we make one state and we pass an object on that.

import { useState } from "react";
const Demo = () => {
  const [data, setData] = useState({
    email: "",
    pass: "",
    name: "",
  });
  return (
    <div>
      <input
        onInput={(e) => {
          setData({
            ...data,
            email: e.target.value,
          });
        }}
        placeholder="email"
        type="text"
      />
      <input
        onInput={(e) => {
          setData({
            ...data,
            pass: e.target.value,
          });
        }}
        placeholder="password"
        type="text"
      />
      <input
        onInput={(e) => {
          setData({
            ...data,
            name: e.target.value,
          });
        }}
        placeholder="name"
        type="text"
      />
      <button
        onClick={() => {
          console.log(data);
        }}
      >
        Click me
      </button>
    </div>
  );
};

export default Demo;
