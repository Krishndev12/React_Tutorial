import { configureStore } from "@reduxjs/toolkit";

// configure store se ham Store banate hai redux toolkit me.

// jo CounterSlice.js me ham export kar rahe hai. export default CounterSlice.reducer ye default export hai to isme ham rename kar liye yaha CounterSliceReducer.
import CounterSliceReducer from "./CounterSlice";

// configureStore ekk object return karta hai, uske andar ekk reducer key hoti hai jiski value ekk object hoti hai usme ham reducer function pass karte hai. kuchh bhi key dete hai value me reducer function likhte hai.

export const Store = configureStore({
  reducer: {
    // ye wala name redux devtools me dikhai deta hai. ki aapka jo store me usme ekk slice ka name kya hai.
    Counter: CounterSliceReducer, // yaha ekk key de diye Counter and value me wo reducer jo abhi import kiye hai.
  },
});
