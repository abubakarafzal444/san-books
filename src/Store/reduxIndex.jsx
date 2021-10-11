import cartControl from "./Slices/cartControl";
import { configureStore } from "@reduxjs/toolkit";
import cartItems from "./Slices/CartItems";
import itemLoader from "./Slices/itemLoader";
import DataControl from "./Slices/DataControl";
import AdminPasswordControl from "./Slices/AdminPasswordControl";
const store = configureStore({
  reducer: {
    cart: cartControl.reducer,
    password: AdminPasswordControl.reducer,
    itemDisplay: itemLoader.reducer,
    cartItemsList: cartItems.reducer,
    data: DataControl.reducer,
  },
});
export default store;
