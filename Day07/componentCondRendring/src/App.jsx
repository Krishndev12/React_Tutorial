import Apple from "./Components/Apple";
import { useState } from "react";
const App = () => {
  const [show, setShow] = useState(true);
  return (
    <div>
      <button
        onClick={() => {
          setShow(!show);
        }}
      >
        {show ? "Don't show" : "Show"}
      </button>
      {show && <Apple />}
    </div>
  );
};

export default App;
