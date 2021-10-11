import { createSlice } from "@reduxjs/toolkit";

const itemLoader = createSlice({
  name: "itemLoader",
  initialState: { product: { id: "hello" }, data: [] },
  reducers: {
    setData(state, action) {
      const rData = action.payload.data;
      state.data = rData;
    },
    productDisplay(state, action) {
      const itemId = action.payload;
      const object = state.data.filter((dataItem) => dataItem.id === itemId.id);
      state.product = object[0];
    },
  },
});
export const itemLoadAction = itemLoader.actions;
export default itemLoader;
