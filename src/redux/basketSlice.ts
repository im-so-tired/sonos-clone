import { createSlice } from "@reduxjs/toolkit";
import { basketProduct } from "../types/type";
import { sonosApi } from "./../services/sonosApi";
interface IInitialState {
  basketProducts: basketProduct[] | [];
  amountProduct: number;
  totalConst: number;
  loading: boolean;
}

const initialState: IInitialState = {
  basketProducts: [],
  amountProduct: 0,
  totalConst: 0,
  loading: false,
};
const basketSlice = createSlice({
  name: "basketSlice",
  initialState,
  reducers: {
    addProduct(state, action) {},
    fetchData(state, action) {
      state.basketProducts = action.payload;
    },
    toggleLoading(state, action) {
      state.loading = action.payload;
    },
  },
});
export const { addProduct, fetchData, toggleLoading } = basketSlice.actions;
export default basketSlice.reducer;
