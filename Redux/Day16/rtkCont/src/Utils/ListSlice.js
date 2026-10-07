import { createSlice } from "@reduxjs/toolkit";

const listSlice = createSlice({
  name: "myTodos",
  initialState: [],
  reducers: {
    addText: (state, action) => {
      return [...state, action.payload];
    },
  },
});

// console.log(listSlice);
export default listSlice.reducer;

export const { addText } = listSlice.actions;
