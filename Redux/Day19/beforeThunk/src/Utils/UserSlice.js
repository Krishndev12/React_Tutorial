import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
  name: "UserName",
  initialState: [],
  reducers: {
    addName: (state, action) => {
      return action.payload;
    },
  },
});

// console.log(UserSlice);
export default UserSlice.reducer;
export const { addName } = UserSlice.actions;
