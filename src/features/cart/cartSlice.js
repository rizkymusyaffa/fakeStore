import { createSlice, current, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    carts:[],
}
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            console.log(current(state.carts))
            // state.carts = initialState.carts
            const userCart = state.carts.find((item) => item.cartId === action.payload.userLoggedIn)
            if(userCart){
                const itemInCart = userCart.products.find((item) => item.id === action.payload.product.id);
                if (itemInCart) {
                    itemInCart.quantity++
                } else {
                    userCart.products.push({ ...action.payload.product, quantity: 1})
                }
            } else {
                state.carts.push({products: [{...action.payload.product,quantity:1 }], cartId: action.payload.userLoggedIn})
            }
            
        },
        changeQuantity: (state, action) => {
            const userCart = state.carts.find((item) => item.cartId === action.payload.cartId)
            const item = userCart.products.find((item) => item.id === action.payload.item.id);
            item.quantity = action.payload.qty
        },
        removeItem: (state, action) => {
            const userCart = state.carts.find((item) => item.cartId === action.payload.cartId)
            console.log(current(userCart))
            userCart.products = userCart.products.filter((item) => item.id !== action.payload.item.id);
          },
    }
})

export const cartReducer = cartSlice.reducer;
export const {
  addToCart,
  removeItem,
  changeQuantity
} = cartSlice.actions;