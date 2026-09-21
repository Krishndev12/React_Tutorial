// import Left from "./Components/Left";
// import Right from "./Components/Right";

import Main from "./Components/Main";
import Navbar from "./Components/Navbar";

// import { useState } from "react";
// const App = () => {
//   const [text, setText] = useState("");
//   return (
//     <div style={{ display: "flex" }}>
//       <Left setText={setText} />
//       <Right text={text} />
//     </div>
//   );
// };

// export default App;

////// ⭐⭐⭐⭐⭐⭐⭐⭐

import { useState } from "react";
const App = () => {
  const [theme, setTheme] = useState(true);
  return (
    <div style={{}}>
      <Navbar theme={theme} setTheme={setTheme} />
      <Main theme={theme} setTheme={setTheme} />
    </div>
  );
};

export default App;
