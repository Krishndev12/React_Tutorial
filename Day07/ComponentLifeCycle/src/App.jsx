import { useState, useEffect } from "react";
import MountAndUpdate from "./Components/MountAndUpdate";

const App = () => {
  const [show, setShow] = useState(true);
  return (
    <div>
      <button
        onClick={() => {
          setShow(!show);
        }}
      >
        {show ? "hide" : "show"}
      </button>
      {show && <MountAndUpdate />}
    </div>
  );
};

export default App;
