import { createSlice } from "@reduxjs/toolkit";

export const TodoSLicecreateSlice = createSlice({
  name: "Todos",
  initialState: [],
  reducers: {
    addText: (state, action) => {
      return [...state, action.payload];
    },
    deleteText: (state, action) => {
      return state.filter((item, index) => {
        return index !== action.payload;
      });
    },
  },
});

// console.log(TodoSLicecreateSlice);

export default TodoSLicecreateSlice.reducer;

export const { addText, deleteText } = TodoSLicecreateSlice.actions;
