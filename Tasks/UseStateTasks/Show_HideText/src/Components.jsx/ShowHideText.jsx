import { useState } from "react";
const ShowHideText = () => {
  const [text, setText] = useState(true);
  return (
    <div>
      <h1 style={{ display: text ? "block" : "none" }}>Hello Guys</h1>
      <button
        onClick={() => {
          setText(!text);
        }}
      >
        {text ? "Hide" : "Show"}
      </button>
    </div>
  );
};

export default ShowHideText;
