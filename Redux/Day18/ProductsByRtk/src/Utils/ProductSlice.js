import { createSlice } from "@reduxjs/toolkit";

const ProductSlice = createSlice({
  name: "Myproducts",
  initialState: [],
  reducers: {
    addProduct: (state, action) => {
      const existingProduct = state.find((item, index) => {
        return item.id === action.payload.id;
      });

      if (!existingProduct) {
         state.push(...state,action.payload);
      } else {
        existingProduct.quantity += 1;
      }
    },
  },
});

// console.log(ProductSlice);

export default ProductSlice.reducer;
export const { addProduct } = ProductSlice.actions;
