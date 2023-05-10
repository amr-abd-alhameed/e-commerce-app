import { configureStore } from "@reduxjs/toolkit";
import wishListSlice from "../Redux/Features/wishListSlice";
import itemSlice from "./Features/itemSlice";
const store = configureStore({
    reducer: { wishCard: wishListSlice, itemCard: itemSlice },
});
export default store;
