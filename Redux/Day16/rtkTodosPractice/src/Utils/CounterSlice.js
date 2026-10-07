import { createSlice } from "@reduxjs/toolkit";



const CounterSlice = createSlice({
  name: "MyCounter",
  initialState: 0,
  reducers: {
    increament: (state, action) => state + 1,
    decreament: (state, action) => state - 1,
    reset: () => 0,
  },
});

// console.log(CounterSlice);

export default CounterSlice.reducer;

export const { increament, decreament, reset } = CounterSlice.actions;
