import React from "react";
import { addText } from "../Utils/ListSlice";
import { useDispatch, useSelector } from "react-redux";
import { useRef } from "react";
const Todos = () => {
  // redux store ke andar se data nikalte hai useSelector se. wahi  data ko ham display karwate hai.
  const data = useSelector((store) => {
    return store.Lists; // yaha store. wo likhte hai jo ham key diye hai store me reducerfunction ka key.
  });
  const dispatch = useDispatch();
  const ipRef = useRef(null);
  const textRef = useRef(null);
  return (
    <div>
      <input ref={ipRef} type="text" placeholder="write task" />
      <br />
      <textarea
        ref={textRef}
        name=""
        id=""
        placeholder="write description"
      ></textarea>
      <br />
      <button
        onClick={() => {
          dispatch(
            addText({
              title: ipRef.current.value,
              desc: textRef.current.value,
            }),
          ); // matlab dispatch an action , action kaha se banta hai action creater se . jo ham export kiye hai Slice se.
          //   yaha se jo dispach kiye reducer tak mamla pagucha jo return tha wo initialState me set ho gaya.

          ipRef.current.value = "";
          textRef.current.value = "";
        }}
      >
        Add Task
      </button>

      <ul>
        {data.map((item) => {
          return (
            <article>
              <h1>{item.title}</h1>
              <p>{item.desc}</p>
            </article>
          );
        })}
      </ul>
    </div>
  );
};

export default Todos;
