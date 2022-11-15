import { combineReducers, configureStore } from "@reduxjs/toolkit";
import categoriesReduce from "../features/categories/categoriesSlice";
import productsReduce from "../features/products/productsSlice";
import usersReduce from "../features/users/usersSlice";
import storage from "redux-persist/lib/storage";
import { cartReducer } from "../features/cart/cartSlice";
import { loginReducer } from "../features/login/loginSlice";
import { PERSIST, persistReducer } from "redux-persist";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const reducer = combineReducers({
  categories: categoriesReduce,
  products: productsReduce,
  users: usersReduce,
  cart: cartReducer,
  login: loginReducer
});

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer: { persistedReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [PERSIST],
      },
    }),
});
