import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  categories: [],
};

export const fetchCategories = createAsyncThunk(
  "categories/fetchCategories",
  async () => {
    let url = `https://fakestoreapi.com/products/categories`;
    const response = await axios.get(url);
    return response.data;
  }
);

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchCategories.fulfilled, (state, action) => {
        return { ...state, categories: action.payload };
      })
  },
});

export default categoriesSlice.reducer;
