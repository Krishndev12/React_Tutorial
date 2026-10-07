import { configureStore } from "@reduxjs/toolkit";

import ProductSliceReducer from "./ProductSlice";
export const Store = configureStore({
  reducer: {
    Products: ProductSliceReducer,
  },
});
