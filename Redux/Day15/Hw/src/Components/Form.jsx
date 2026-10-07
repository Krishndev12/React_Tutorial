// import { useRef } from "react";
// import { addItem } from "../Utils/Store";
// import { useDispatch } from "react-redux";
// const Form = () => {
//   const dispatch = useDispatch();
//   const ipRef = useRef(null);
//   return (
//     <div>
//       <input ref={ipRef} type="text" placeholder="write task" />
//       <button
//         onClick={() => {
//           dispatch(addItem(ipRef.current.value));
//           ipRef.current.value = "";
//         }}
//       >
//         Add
//       </button>
//     </div>
//   );
// };

// export default Form;

import { useRef } from "react";
import { addItem } from "../Utils/Store";
import { useDispatch } from "react-redux";
const Form = () => {
  const dispatch = useDispatch();
  const ipRef = useRef(null);
  const desRef = useRef(null);
  return (
    <div>
      <input ref={ipRef} type="text" placeholder="write task" />
      <input ref={desRef} type="text" placeholder="add desc" />
      <button
        onClick={() => {
          //   dispatch(addItem(ipRef.current.value));
          //   ipRef.current.value = "";

          if (!ipRef.current.value || !desRef.current.value) {
            return;
          }
          dispatch(
            addItem({
              title: ipRef.current.value,
              desc: desRef.current.value,
            }),
          );
          ipRef.current.value = "";
          desRef.current.value = "";
        }}
      >
        Add
      </button>
    </div>
  );
};

export default Form;
