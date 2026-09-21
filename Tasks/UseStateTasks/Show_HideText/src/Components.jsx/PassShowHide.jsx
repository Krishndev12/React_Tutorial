import { useState } from "react";

const PassShowHide = () => {
  const [pass, setPass] = useState(true);
  return (
    <div>
      <button
        onClick={() => {
          setPass(!pass);
        }}
      >
        {pass ? "Show" : "Hide"}
      </button>
      <input
        type={pass ? "password" : "text"}
        name=""
        placeholder="type password"
      />
    </div>
  );
};

export default PassShowHide;
