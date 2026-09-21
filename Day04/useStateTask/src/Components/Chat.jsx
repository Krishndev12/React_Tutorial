import { useState } from "react";

const Chat = () => {
  const [text, setText] = useState("");
  return (
    <div>
      <h1>{text}</h1>
      <input
        onInput={(e) => {
          setText(e.target.value);
        }}
        type="text"
        placeholder="type something"
      />
    </div>
  );
};

export default Chat;
