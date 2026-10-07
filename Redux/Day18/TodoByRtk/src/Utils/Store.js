import { configureStore } from "@reduxjs/toolkit";

import TodoSliceReducer from "./TodosSlice";

export const Store = configureStore({
  reducer: {
    Todo: TodoSliceReducer,
  },
});
