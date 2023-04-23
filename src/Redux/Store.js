import { configureStore } from "@reduxjs/toolkit";
import wishListCard from "../Redux/Features/wishListCard";
const store = configureStore({
    reducer: { wishCard: wishListCard },
});
export default store;
