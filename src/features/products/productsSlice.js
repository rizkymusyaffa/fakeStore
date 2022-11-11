import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  products: [],
  loading: false,
  error: "",
};

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    let url = `https://fakestoreapi.com/products`;
    const response = await axios.get(url);
    return response.data;
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchProducts.pending, (state) => {
        return { ...state, loading: true };
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        const products = action.payload.map((product) => {
          return { ...product, qty: 20}
        })
        return {
          ...state,
          products: products,
          loading: false,
          error: "",
        };
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        return { ...state, loading: false, error: action.error.message };
      });
  },
});

export default productsSlice.reducer;
