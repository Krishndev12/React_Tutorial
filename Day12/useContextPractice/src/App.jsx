import { useState } from "react";
import { createContext } from "react";
import One from "./Components/One";
export const MyContext = createContext();

const App = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  return (
    // yaha object me pass karte hai kyuki multiple value pass karna padta hai naa isiliye.
    <MyContext.Provider value={{ name, lastName }}>
      <div>
        <input
          onInput={(e) => {
            setName(e.target.value);
          }}
          type="text"
          placeholder="first name"
        />
        <input
          onInput={(e) => {
            setLastName(e.target.value);
          }}
          type="text"
          placeholder="Last name"
        />
        <One />
      </div>
    </MyContext.Provider>
  );
};

export default App;
