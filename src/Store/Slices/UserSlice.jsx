import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userName: null,
  userEmail: null,
};

const UserSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setActiveUser(state, action) {
      state.userName = action.payload.userName;
      state.userEmail = action.payload.userEmail;
    },
    setUserLogoutState(state, action) {
      state.userName = null;
      state.userEmail = null;
    },
  },
});

export const { setActiveUser, setUserLogoutState } = UserSlice.actions;
export default UserSlice;
