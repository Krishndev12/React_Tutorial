import { useContext, useState, createContext } from "react";

export const TextContext = createContext();

export function TextContentProvider({ children }) {
  const [text, setText] = useState([]);
  return (
    <TextContext.Provider value={{ text, setText }}>
      {children}
    </TextContext.Provider>
  );
}

// custome function

export function useTextContext() {
  return useContext(TextContext);
}
