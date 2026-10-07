import { createSlice } from "@reduxjs/toolkit";

// sabse phale ekk slice create karte hai

// createSlice ekk object accept karta hai, jiske andar teen chizen hoti hai. 1st name ham slice ka name de sakte hai, 2nd initialState, 3rd is reducers which is an object.

// createSlice ekk function hai kuchh to return karta hai.
const CounterSlice = createSlice({
  // ye name use hota hai action creater ke andar. behind the scene ye khud se action create karta hai usme ye name use hota hai.
  name: "Counter",
  initialState: 0,
  reducers: {
    increament: (state, action) => {
      return state + 1;
    },
    decreament: (state, action) => {
      return state - 1;
    },
    reset: (state, action) => {
      return 0;
    },
  },
});

// ye createSlice ekk object return karat hai jisme reducer ekk key hoti hai.(reducer ekk function hota  hai jo state me changes karta hai). yahi reducer ko hame pahuchana hai Store me.
// console.log(CounterSlice);

// yaha CounterSlice.reducer se reducer nikal liye.
export default CounterSlice.reducer;
export const {increament,decreament,reset} = CounterSlice.actions