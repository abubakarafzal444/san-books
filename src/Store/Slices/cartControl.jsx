import { createSlice } from "@reduxjs/toolkit";
const cartControl = createSlice({
  name: "cart",
  initialState: { show: true },
  reducers: {
    toggle(state) {
      state.show = !state.show;
    },
  },
});
export const cartActions = cartControl.actions;
export default cartControl;
