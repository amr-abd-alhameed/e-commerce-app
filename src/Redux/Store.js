import { configureStore } from "@reduxjs/toolkit";
import wishListSlice from "../Redux/Features/wishListSlice";
const store = configureStore({
    reducer: { wishCard: wishListSlice },
});
export default store;
