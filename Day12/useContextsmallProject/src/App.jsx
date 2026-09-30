import Left from "./Components/Left";
import Navbar from "./Components/Navbar";
import Right from "./Components/Right";
import { createContext } from "react";
import { useState } from "react";
export const themeContext = createContext();
const App = () => {
  const [theme, setTheme] = useState(true);
  const [text, setText] = useState("");
  return (
    <themeContext.Provider value={{ theme, setTheme, text, setText }}>
      <div>
        <Navbar />
        <div className="flex justify-between">
          <Left />
          <Right />
        </div>
      </div>
    </themeContext.Provider>
  );
};

export default App;
