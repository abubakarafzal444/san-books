import { createSlice } from "@reduxjs/toolkit";

const inititalState = {
  bookData: [],
  newArrivalData: [],
  saleData: [],
  monthSpecialData: [],
  eventSpecialData: [],
  bestSellerData: [],
  newIdAndKey: [],
};
const DataControl = createSlice({
  name: "dataController",
  initialState: inititalState,
  reducers: {
    dataReceiver(state, action) {
      state.bookData = action.payload.data;
    },
    newArrival(state, action) {
      const newArrivalDataProgress = state.bookData?.filter(
        (item) =>
          new Date().getTime() - new Date(item.DateAdded).getTime() <
          item.NewArrivalDays * 86400000
      );
      state.newArrivalData = newArrivalDataProgress
        .sort((a, b) => {
          a.DateAdded = new Date(a.DateAdded).getTime();
          b.DateAdded = new Date(b.DateAdded).getTime();
          return a.DateAdded - b.DateAdded;
        })
        .reverse();
    },
    sale(state, action) {
      state.saleData = state.bookData?.filter(
        (item) => (item.ourPrice / item.MarketPrice) * 100 < 50
      );
    },
    monthSpecial(state, action) {
      state.monthSpecialData = state.bookData?.filter(
        (item) => item.MonthSpecial === true
      );
    },
    eventSpecial(state, action) {
      state.eventSpecialData = state.bookData?.filter(
        (item) => item.EventSpecial === true
      );
    },
    bestSeller(state, action) {
      state.bestSellerData = state.bookData
        .sort((a, b) => {
          return a.CopiesSold - b.CopiesSold;
        })
        .reverse()
        .slice(0, 6);
    },
    newIdKey(state, action) {
      state.newIdAndKey =
        state.bookData
          ?.sort((a, b) => {
            return a.Key - b.Key;
          })
          ?.reverse()[0]?.id + 1;

      // var newIdAndKeyProgress1 = newIdAndKeyProgress.reverse();
      // state.newIdAndKey = newIdAndKeyProgress1[0].id + 1;
    },
    productDisplay(state, action) {
      state.bookData = action.payload.data;

      const itemId = action.payload;
      const object = state.bookData.filter(
        (dataItem) => dataItem.id === itemId.id
      );
      state.product = object[0];
    },
  },
});
export const dataAction = DataControl.actions;
export default DataControl;
