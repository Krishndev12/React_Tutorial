import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

export const CounterContext = createContext();

export function CounterContextProvider({ children }) {
  const [count, setCount] = useState(0);
  return (
    <CounterContext.Provider value={{ count, setCount }}>
      {children}
    </CounterContext.Provider>
  );
}

// custom hook

export function useCounter() {
  return useContext(CounterContext);
}
