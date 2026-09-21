import { useState } from "react";
const InputField = () => {
  const [type, setType] = useState("");
  const [length, setLength] = useState();
  return (
    <div>
      <h1>{type}</h1>
      <h1>Lenght:{length}</h1>
      <input
        onInput={(e) => {
          setType(e.target.value);
          setLength(e.target.value.length);
        }}
        placeholder="type here"
        type="text"
      />
    </div>
  );
};

export default InputField;
