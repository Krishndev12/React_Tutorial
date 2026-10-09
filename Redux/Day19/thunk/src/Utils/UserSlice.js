import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

// ye jo thunk hai behind the scene actions hi create karta hai. unn actions ko handle karne ke liye ham reducers banaye hai. niche.

// agar ye action creator hai to dispatch ke andar hi call karni padegi.
// createAsyncThunk me do chizen pass karte, 1st one is action type me jo string hoga pahle, second async function.
export const getUsers = createAsyncThunk("kuchhbhilikhdo", async (_, thunk) => {
  try {
    const res = await fetch("https://dummyjson.com/users");

    // if (!res.ok) {
    //   return thunkAPI.rejectWithValue(`HTTP Error: ${res.status}`);
    // }
    const data = await res.json();

    return data.users; //DummyJSON ka response ek object hota hai, jiske andar users naam ki property mein array hota hai.
  } catch (error) {
    // console.log(error);
    return thunk.rejectWithValue(error.message);
    // return error.message; // ham catch block me normal aise return nahi karte.
  }
});

const UserSlice = createSlice({
  name: "UserData",
  initialState: {
    loading: false,
    error: null,
    data: [],
  },
  reducers: {},
  // thunk jo bhi action dispatch karti hai wo likhte hai sabhi extraREducer ke andar.
  //   extraReducers ekk function hai jiski parameter builder hoti hai.
  extraReducers: (buider) => {
    buider
      .addCase(getUsers.pending, (state, action) => {
        return {
          ...state,
          loading: true, // pending me hai matlab loading ho raha hai. baki jo tha waisa hi but loading ko yaha true kar diye false se.
        };
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        return {
          ...state, // baki saari chize as it is.
          loading: false, // kyuki yaha to data aa gaya to loading to nahi ho raha hai.
          data: action.payload, // yaha payload wo hai jo bhi createAsyncThunk return kar raha hai.
        };
      })
      .addCase(getUsers.rejected, (state, action) => {
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      });
  },
});

export default UserSlice.reducer;
