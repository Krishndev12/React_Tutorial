import { configureStore } from "@reduxjs/toolkit";
import ListSliceReducer from "./ListSlice";

export const Store = configureStore({
  reducer: {
    Lists: ListSliceReducer,
  },
});
