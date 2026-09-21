import { useState } from "react";
const ChangeText = () => {
  const [text, setText] = useState("Krishna");
  return (
    <div>
      <h1
        onClick={() => {
          setText("Rahul");
        }}
      >
        {text}
      </h1>
    </div>
  );
};

export default ChangeText;
