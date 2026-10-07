import React, { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addText, deleteText } from "../Utils/TodosSlice";
const Todos = () => {
  const data = useSelector((store) => {
    return store.Todo;
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
              task: ipRef.current.value,
              desc: textRef.current.value,
            }),
          );
        }}
      >
        Add task
      </button>

      {data.map((item, index) => {
        return (
          <article style={{ border: "2px solid black" }}>
            <h1>{item.task}</h1>
            <p>{item.desc}</p>
            <button
              onClick={() => {
                dispatch(deleteText(index));
              }}
            >
              delete{" "}
            </button>
          </article>
        );
      })}
    </div>
  );
};

export default Todos;
