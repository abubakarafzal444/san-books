import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bookData: [],
  itemsInCart: [],
  totalQuantity: 0,
  totalCheckoutPrice: 0,
};
const cartItems = createSlice({
  name: "cartItems",
  initialState,
  reducers: {
    receiver(state, action) {
      state.bookData = action.payload.data;
    },
    addItemInCart(state, action) {
      state.totalQuantity = +state.totalQuantity + 1;
      const newItem = action.payload;
      const foundItem = state.bookData.filter((item) => item.id === newItem.id);

      const existingItem = state.itemsInCart.find(
        (item) => item.id === newItem.id
      );
      state.totalCheckoutPrice =
        +state.totalCheckoutPrice + Number(foundItem[0].ourPrice);
      if (!existingItem) {
        state.itemsInCart.push({
          ...foundItem[0],
          quantity: 1,
          itemsLeft: foundItem[0].Stock - 1,
        });
      } else {
        existingItem.quantity++;
        existingItem.itemsLeft--;
      }
    },
    removeItemFromCart(state, action) {
      state.totalQuantity = state.totalQuantity - 1;
      const payloadReceived = action.payload;
      const foundItem = state.itemsInCart.find(
        (item) => item.id === payloadReceived.id
      );
      state.totalCheckoutPrice = state.totalCheckoutPrice - foundItem.ourPrice;

      if (foundItem.quantity === 1) {
        state.itemsInCart = state.itemsInCart.filter(
          (item) => item.id !== foundItem.id
        );
      } else {
        foundItem.quantity--;
        foundItem.itemsLeft++;
      }
    },
    deleteAllHandle(state) {
      state.totalQuantity = 0;
      state.itemsInCart = [];
      state.totalCheckoutPrice = 0;
    },
    singleItemRemove(state, action) {
      const id = action.payload.id;
      const deleted = state.itemsInCart.find((items) => items.id === id);
      state.totalQuantity = state.totalQuantity - deleted.quantity;
      state.itemsInCart = state.itemsInCart.filter((item) => item.id !== id);
      state.totalCheckoutPrice =
        state.totalCheckoutPrice - deleted.quantity * deleted.ourPrice;
    },
  },
});
export const cartItemActions = cartItems.actions;
export default cartItems;
