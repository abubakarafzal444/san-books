import { createSlice } from "@reduxjs/toolkit";
const AdminPasswordControl = createSlice({
  name: "cart",
  initialState: { show: true },
  reducers: {
    toggle(state) {
      state.show = !state.show;
    },
  },
});
export const passwordActions = AdminPasswordControl.actions;
export default AdminPasswordControl;
