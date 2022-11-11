import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  users: [],
};

export const fetchUsers = createAsyncThunk(
  "users/fetchUsers",
  async () => {
    let url = `https://fakestoreapi.com/users`;
    const response = await axios.get(url);
    return response.data;
  }
);

const productsSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchUsers.fulfilled, (state, action) => {
        return { ...state, users: action.payload };
      })
  },
});

export default productsSlice.reducer;
