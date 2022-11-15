import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit";
import { type } from "@testing-library/user-event/dist/type";
import axios from "axios";

const initialState = {
  products: [],
  loading: false,
  error: "",
  sales:[]
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
  reducers: {
    checkout: (state,action) => {
      for(let i in action.payload){
        console.log(action.payload[i])
        let productCheckout = action.payload[i]
        const itemInProduct = state.products.find((item)=> item.id === productCheckout.id)
        console.log(current(itemInProduct))
        if(productCheckout.quantity <= itemInProduct.qty){
          itemInProduct.qty -= productCheckout.quantity
          itemInProduct.sold += Number(productCheckout.quantity)
        }
      }
      console.log(current(state.products))
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchProducts.pending, (state) => {
        return { ...state, loading: true };
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        const products = action.payload.map((product) => {
            return { ...product, qty: 20, sold: 0}
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

export const {checkout} = productsSlice.actions;
export default productsSlice.reducer;
